const numOfPageviews = document.querySelector('.num-of-pageviews');
const priceDisplay = document.querySelector('.price-display');
const rangeInput = document.querySelector('.price-card__slidebar');

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

// priceDisplay.classList.add('yr');

const setCurrentValue = () => {
  let rangeValue = rangeInput.value;
  numOfPageviews.innerText = priceTable[rangeValue].pageviews;

  if (priceDisplay.classList.contains('yr')) {
    priceDisplay.innerText = priceTable[rangeValue].price * 0.75;
  } else {
    priceDisplay.innerText = priceTable[rangeValue].price;
  }
};
window.onload = () => {
  rangeInput.addEventListener('input', setCurrentValue);
  setCurrentValue();
};
