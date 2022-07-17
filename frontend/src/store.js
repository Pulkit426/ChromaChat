import {configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import messagesReducer from './reducers/messages';
import roomsReducer from './reducers/rooms';
import userReducer from './reducers/user' 


const rootReducer = combineReducers({
    messages: messagesReducer,
    rooms: roomsReducer,
    user: userReducer
})
  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = configureStore({
                reducer: persistedReducer,
                middleware: (getDefaultMiddleware) =>
                  getDefaultMiddleware({
                    serializableCheck: {
                      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                  }),
})

export const persistor = persistStore(store)