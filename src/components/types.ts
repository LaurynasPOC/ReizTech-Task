export type SortType = 'asc' | 'desc';
export type RegionType = 'all' | 'asia' | 'africa' | 'europe' | 'oceania' | 'americas' | 'polar';
export type AreaType = 'all' | 'smaller' | 'bigger'

export interface Country {
    name: string;
    region: string;
    area?: number | any;
}