import { Habit, ImpactEnum } from '../../dashboard/models/habit';

export class HabitsService {
  private habitsCopy!: Habit[];
  private habits: Habit[] = [
    new Habit('Exercise', ImpactEnum.positive, 4, 4),
    new Habit('Drink Alcohol', ImpactEnum.negative, 2, 4),
    new Habit('Go to work', ImpactEnum.neutral, 1, 5),
  ];

  public addHabit(habit: Habit) {
    this.habits.push(habit);
    this.habitsCopy = [...this.habits];
  }

  public editHabit(habit: Habit) {
    const index = this.habits.findIndex((h) => h.id === habit.id);
    if (index !== -1) {
      this.habits[index] = habit;
      this.habitsCopy = [...this.habits];
    }
  }

  public removeHabit(habit: Habit) {
    const index = this.habits.findIndex((h) => habit.id === h.id);
    if (index !== -1) {
      this.habits.splice(index, 1);
      this.habitsCopy = [...this.habits];
    }
  }

  public onSearchHabit(name: string) {
    this.habits = [...this.habitsCopy];
    this.habits = this.habits.filter((habit) =>
      habit.name.toLowerCase().includes(name)
    );
  }
}
