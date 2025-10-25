
export interface skill_item {
    icon_path: string,
    name: string,
    career?: number | string,
    sentence?: string
}

export interface skill_set_category_item {
    category: string,
    lists: skill_item[]
}

