import { inject, Injectable, signal } from '@angular/core';
import { NewMenu } from '../models/menu.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class MenuCatalogService {
  private readonly http = inject(HttpClient);
  private readonly addedMenus = signal<readonly NewMenu[]>([]);

  readonly menus = this.addedMenus.asReadonly();

  addMenu(menu: Omit<NewMenu, 'id'>): void {
    this.addedMenus.update((menus) => [
      ...menus,
      {
        ...menu,
        // id: `custom-${Date.now()}-${menus.length}`,
      },
    ]);
  }

  removeMenu(id: string) {
    return this.http.delete(`${environment.apiUrl}/delete-menu/${id}`).pipe(
      map((response) => {
        this.addedMenus.update((menus) => menus.filter((menu) => menu.id !== id));
        return response;
      }),
    );
  }

  getMenuList(): readonly NewMenu[] {
    return this.addedMenus();
  }

  fetchMenuList() {
    return this.http.get<NewMenu[]>(`${environment.apiUrl}/menu-list`).pipe(
      map((menus) => {
        this.addedMenus.set(menus);
        return menus;
      }),
    );
  }

  saveMenu(menu: NewMenu) {
    return this.http
      .post(`${environment.apiUrl}/save-menu`, menu)
      .pipe(map((response) => response));
  }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('imageBuffer', image);

    return this.http
      .post<{
        status: number;
        data: {
          attachments: { url: string }[];
        };
      }>(`${environment.apiUrl}/upload-image`, formData)
      .pipe(map((response) => response));
  }
}
