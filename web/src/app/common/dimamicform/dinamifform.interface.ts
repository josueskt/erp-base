export interface DynamicField {
    name: string;          // Nombre del campo (debe coincidir con el FormControl)
    label: string;         // Etiqueta a mostrar
    type: 'text' | 'number' | 'boolean' | 'select' | 'textarea'; // Tipo de campo
    options?: {            // Opciones para selects
      value: any;
      label: string;
    }[];
    placeholder?: string;
    disabled?: boolean;
  }