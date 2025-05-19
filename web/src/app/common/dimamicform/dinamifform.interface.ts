// Asegúrate de que tu interfaz incluya explícitamente 'multiselect'
export interface DynamicField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'multiselect';
  options?: {
    value: any;
    label: string;
  }[];
  placeholder?: string;
  disabled?: boolean;
}