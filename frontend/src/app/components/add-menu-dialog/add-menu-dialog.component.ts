import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-menu-dialog',
  standalone: true,
  templateUrl: './add-menu-dialog.component.html',
  styleUrl: './add-menu-dialog.component.scss',
})
export class AddMenuDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<AddMenuDialogComponent>);

  protected closeDialog(): void {
    this.dialogRef.close();
  }
}
