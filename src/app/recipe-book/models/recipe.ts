import { Ingredient } from '../../shared/models/ingredient';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public image_path: string,
    public ingredients?: Ingredient[]
  ) {}
}
