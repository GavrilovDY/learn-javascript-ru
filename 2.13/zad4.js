let n=prompt('Введите n=','10');

go: for (let i=2;i<=n;i++) {
	
	for (let j=2; j<i; j++) {
		if (i % j==0) continue go;
	}
alert(i);
}
