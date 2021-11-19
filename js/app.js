const numOfPageviews = document.querySelector('.num-of-pageviews');
const priceDisplay = document.querySelector('.price-display');
const rangeInput = document.querySelector('.price-card__slidebar');
const toggleBtn = document.querySelector('.price-card__toggle-btn');

const priceTable = {
  0: {
    pageviews: '10K',
    price: 8,
  },
  1: {
    pageviews: '50K',
    price: 12,
  },
  2: {
    pageviews: '100K',
    price: 16,
  },
  3: {
    pageviews: '500K',
    price: 24,
  },
  4: {
    pageviews: '1M',
    price: 36,
  },
};

// Toggle monthly and yearly billing
toggleBtn.addEventListener('click', function () {
  priceDisplay.classList.toggle('yearly');
  setCurrentValue();
});

// set EventListener for range input and set the starting pageviews & price
window.onload = () => {
  rangeInput.addEventListener('input', setCurrentValue);
  setCurrentValue();
};

// set current pageview and price based on range input value
const setCurrentValue = () => {
  let rangeValue = rangeInput.value;

  numOfPageviews.innerText = priceTable[rangeValue].pageviews;

  if (priceDisplay.classList.contains('yearly')) {
    let num = priceTable[rangeValue].price * 0.75;
    priceDisplay.innerText = num.toFixed(2);
  } else {
    let num = priceTable[rangeValue].price;
    priceDisplay.innerText = num.toFixed(2);
  }
};
