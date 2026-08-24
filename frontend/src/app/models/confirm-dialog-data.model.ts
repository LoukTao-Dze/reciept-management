export interface ConfirmDialogData {
  readonly title: string;
  readonly message: string;
  readonly confirmText?: string;
  readonly cancelText?: string;
  readonly danger?: boolean;
}
