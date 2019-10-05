import 'bootstrap';
import './scss/app.scss';

$('button[id^=bt]').on('click', e => {
    alert(`${$(e.target).attr('id')} "${$(e.target).text()}" clicked`);
});

$('.list-group-item').on('click', e => {
    alert(`"${$(e.target).text()}" clicked`);
});

$('#flip-tab').on('click', e => {
    $('.nav-tabs :not(.active)').tab('show')
});

$('a[data-toggle="tab"]').on('click', e => {
    alert(`${$(e.target).attr('id')} clicked`);
});
