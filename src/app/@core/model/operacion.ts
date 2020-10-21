export class NbMenuItem {
    id: number;
    title: string;
    icon: string;
    link: string;
    children: NbMenuItem;
    home: boolean;
    group: boolean;
}
