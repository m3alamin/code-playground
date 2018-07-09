import {API_CONTACT} from '../constant';

export const loggerMiddleware = store => next => action => {
  //console.log('logger middleware', action);
  next(action);
}

export const modifyContactAPIReq = store => next => action => {

  if(action.type === API_CONTACT) {
    let payLoad = action.payload;
    payLoad.end((err, res) => {
      if(res.status === 200) {
        action.payload = res.body;
        next(action);
      }
    });
    
  } else {
    next(action);
  }
  
}