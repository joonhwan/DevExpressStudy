import 'font-awesome/css/font-awesome.css';
import $ from 'jquery';
import 'jquery-bar-rating';
import 'jquery-bar-rating/dist/themes/fontawesome-stars.css';
import 'jquery-bar-rating/dist/themes/bars-1to10.css';
import 'jquery-bar-rating/dist/themes/bars-pill.css';

$('#rating').barrating('show', {
  // theme: 'fontawesome-stars',
  theme: 'bars-1to10',
  // theme: 'bars-pill',
  showSelectedRating: false,
  onSelect: function (value, text, event) {
    console.log(`오우야 ❤️ 평점을 ${value} 로 정 했네요 😅`);
  },
});

console.log('rating.js 로드됨');
