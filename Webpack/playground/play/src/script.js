console.log('pack');

const canIHave = status=>{
	return new Promise((a,r)=>{
		if(status === 1) {
			a("accepted");
		} else {
			r("rejected");
		}
	});
}

canIHave(1).then(s=>{
	console.log(s);
}, r=>{
	console.log(r);
});




const root = document.querySelector('#root');
root.innerHTML = `<p>Hello pack.</p>`;