export type Blog = {
  imageUrl: string;
  title: string;
  description?: string;
}

export enum StorageKeys {
  CurrentTheme = 'current-theme'
}

export enum ToastMessageType {
  Success = 'success',
  Failure = 'failure'
}