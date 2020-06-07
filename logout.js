function logout(){
	console.log("logging out");
	myDataRef.unauth();
	location.reload('login.html');
}