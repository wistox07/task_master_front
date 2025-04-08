export interface ApiErrorResponse {
  code: number;
  error: true;
  message: string;
  message_detail: string | string[];
}
