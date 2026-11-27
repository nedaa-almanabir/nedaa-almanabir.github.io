(function(){var q=document.getElementById('q'),rows=[].slice.call(document.querySelectorAll('.row')),chips=[].slice.call(document.querySelectorAll('.chip')),t='';
function n(s){return s.replace(/[\u064B-\u065F\u0670]/g,'').replace(/[إأآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase();}
function ar(x){return String(x).replace(/\d/g,function(d){return '٠١٢٣٤٥٦٧٨٩'[d];});}
function f(){var v=n(q.value.trim()),c=0;rows.forEach(function(r){var ok=(!t||r.dataset.topic===t)&&(!v||n(r.dataset.text).indexOf(v)>-1);r.hidden=!ok;if(ok)c++;});document.getElementById('empty').hidden=c>0;document.getElementById('count').textContent=ar(c)+' من '+ar(rows.length)+' خطب';}
q.addEventListener('input',f);chips.forEach(function(b){b.addEventListener('click',function(){t=b.dataset.t;chips.forEach(function(x){x.classList.toggle('on',x===b);});f();});});f();})();
