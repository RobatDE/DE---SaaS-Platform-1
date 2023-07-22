import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MainState {
  markets: any;
  loading: boolean;
  count: number;
  notify: {
    showNotification: boolean;
    textNotification: string;
    typeNotification: string;
  };
}

const initialState: MainState = {
  markets: [],
  loading: false,
  count: 0,
  notify: {
    showNotification: false,
    textNotification: '',
    typeNotification: 'warn',
  },
};

export const fetch = createAsyncThunk('markets/fetch', async (data: any) => {
  const { id, query } = data;
  const result = await axios.get(`markets${query || (id ? `/${id}` : '')}`);
  return id
    ? result.data
    : { rows: result.data.rows, count: result.data.count };
});

export const deleteItem = createAsyncThunk(
  'markets/deleteMarkets',
  async (id: string) => {
    try {
      await axios.delete(`markets/${id}`);
      //        thunkAPI.dispatch(fetch({ id: '', query: '' }))
    } catch (error) {
      console.log(error);
    }

    // showNotification('Users has been deleted', 'success');
  },
);

export const create = createAsyncThunk(
  'markets/createMarkets',
  async (data: any) => {
    const result = await axios.post('markets', { data });
    // showNotification('Users has been created', 'success');
    return result.data;
  },
);

export const update = createAsyncThunk(
  'markets/updateMarkets',
  async (payload: any) => {
    const result = await axios.put(`markets/${payload.id}`, {
      id: payload.id,
      data: payload.data,
    });
    return result.data;
  },
);

export const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetch.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetch.fulfilled, (state, action) => {
      if (action.payload.count >= 0) {
        state.markets = action.payload.rows;
        state.count = action.payload.count;
      } else {
        state.markets = action.payload;
      }
      state.loading = false;
    });

    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteItem.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteItem.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(create.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(create.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(create.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(update.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(update.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(update.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = usersSlice.actions

export default marketsSlice.reducer;
