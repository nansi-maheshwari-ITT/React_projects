export const increaseNumber =(incrementAmount:string)=>{
	return{
		type:'increaseNumber',
		payload:incrementAmount,
	}
}

export const decreaseNumber =(decrementAmount:string)=>{
	return{
		type:'decreaseNumber',
		payload:decrementAmount
	}
}

export const resetNumber =()=>{
	return{
		type:'resetNumber'
	}
}