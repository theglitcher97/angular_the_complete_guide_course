export class Habit {
  static idCounter = 0;
  private readonly _id: number;

  constructor(
    private _name: string,
    private _impact: ImpactEnum,
    private _times_a_day: number,
    private _days_per_week: number
  ) {
    this._id = Habit.idCounter++;
  }

  public get id() {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim().length > 0) this._name = value;
  }

  get impact(): ImpactEnum {
    return this._impact;
  }

  set impact(value: ImpactEnum) {
    this._impact = value;
  }

  get times_a_day(): number {
    return this._times_a_day;
  }

  set times_a_day(value: number) {
    if (value > 0) this._times_a_day = value;
  }

  get days_per_week(): number {
    return this._days_per_week;
  }

  set days_per_week(value: number) {
    if (value > 0) this._days_per_week = value;
  }
}

export enum ImpactEnum {
  positive = 'positive',
  negative = 'negative',
  neutral = 'neutral',
}
