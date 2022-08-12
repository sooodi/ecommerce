export interface CreateCategoryDTO {
    name:String;
    description: String;
    isAvailable: Boolean;
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;