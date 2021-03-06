new Vue({
	el: '#app',
	data: {
		barWidth: 0,
		barTimer: null,
	},
	computed:{
				
	},
	watch:{
		barWidth(velho, novo){
			if(novo == 99){
				clearInterval(this.barTimer);
				this.barTimer = null;
			}
		}
	},
	methods: {
		startBar() {
			if(this.barWidth != '100' && this.barTimer == null){
				this.barTimer = setInterval(() => {
					this.barWidth++
				}, 50)
			}
		},
		progressBar(){
			return {
				width: this.barWidth + '%'
			}
		}
	}
})