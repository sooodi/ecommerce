export interface CreateProductDTO {
  title: string;
  image: string;
  description: string;
  price: number;
  discount:number;
  isAvailable: Boolean;
  stock:  Number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
