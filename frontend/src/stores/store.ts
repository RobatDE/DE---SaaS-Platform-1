import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';

import usersSlice from './users/usersSlice';
import advertisementsSlice from './advertisements/advertisementsSlice';
import audiencesSlice from './audiences/audiencesSlice';
import brandsSlice from './brands/brandsSlice';
import buyersSlice from './buyers/buyersSlice';
import campaignsSlice from './campaigns/campaignsSlice';
import companySlice from './company/companySlice';
import goalsSlice from './goals/goalsSlice';
import growthSlice from './growth/growthSlice';
import historySlice from './history/historySlice';
import marketsSlice from './markets/marketsSlice';
import personalitySlice from './personality/personalitySlice';
import sentimentsSlice from './sentiments/sentimentsSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,

    users: usersSlice,
    advertisements: advertisementsSlice,
    audiences: audiencesSlice,
    brands: brandsSlice,
    buyers: buyersSlice,
    campaigns: campaignsSlice,
    company: companySlice,
    goals: goalsSlice,
    growth: growthSlice,
    history: historySlice,
    markets: marketsSlice,
    personality: personalitySlice,
    sentiments: sentimentsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
