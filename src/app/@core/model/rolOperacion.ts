import { Rol } from './rol';
import { NbMenuItem } from '@nebular/theme';

export class RolOperacion {
    id: number;
    title: string;
    icon: string;
    link: string;
    home: boolean;
    group: boolean;
    items: NbMenuItem;
    activo: boolean;
}
