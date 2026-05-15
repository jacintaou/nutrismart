const foods = {

  Pizza: {
    score: 5,
    calories: 285,
    protein: '12g',
    fat: '10g',
    message: 'Moderate nutritional value. Consider adding more vegetables.'
  },

  Burger: {
    score: 4,
    calories: 350,
    protein: '20g',
    fat: '18g',
    message: 'High calorie meal. Lean protein alternatives are recommended.'
  },

  Salad: {
    score: 9,
    calories: 120,
    protein: '5g',
    fat: '4g',
    message: 'Excellent nutrient-dense option rich in fibre and vitamins.'
  },

  Apple: {
    score: 10,
    calories: 95,
    protein: '0g',
    fat: '0g',
    message: 'Very healthy food choice with high fibre content.'
  },

  Fries: {
    score: 3,
    calories: 365,
    protein: '4g',
    fat: '17g',
    message: 'High in saturated fats and sodium. Consume occasionally.'
  },

  Sushi: {
    score: 8,
    calories: 200,
    protein: '14g',
    fat: '3g',
    message: 'Balanced meal containing lean protein and healthy carbohydrates.'
  }
};

function analyseFood() {

  const selectedFood = document.getElementById('food').value;

  const result = document.getElementById('result');

  if (!selectedFood) {
    result.innerHTML = 'Please select a food item.';
    return;
  }

  const food = foods[selectedFood];

  result.innerHTML = `

    <div class="box">

      <h2>${selectedFood}</h2>

      <p><strong>Health Score:</strong> ${food.score}/10</p>

      <p><strong>Calories:</strong> ${food.calories}</p>

      <p><strong>Protein:</strong> ${food.protein}</p>

      <p><strong>Fat:</strong> ${food.fat}</p>

      <br>

      <p>${food.message}</p>

    </div>

  `;
}
