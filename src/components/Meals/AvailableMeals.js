import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Veggie Pizza',
    description: 'Peppers and mushrooms',
    price: 229,
  },
  {
    id: 'm2',
    name: 'Cheese Pizza',
    description: 'A german specialty!',
    price: 169,
  },
  {
    id: 'm3',
    name: 'Pepperoni Pizza',
    description: 'crispy, salty round of pepperoni',
    price: 349,
  },
  {
    id: 'm4',
    name: 'Margherita Pizza',
    description: 'sausage for a hearty meal.',
    price: 599,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
