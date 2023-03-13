const initialState=0;

interface Action  {
	type: string;
	payload:string;
  }

const changeCount=(state=initialState,action:Action)=>{
	switch(action.type){
		case "increaseNumber":return state +Number(action.payload);
		case "decreaseNumber":if(state-Number(action.payload)<0){
			return 0;
		}
		return state-Number(action.payload)
		case "resetNumber":return 0;
		default:return state;
	}
}

export default changeCount