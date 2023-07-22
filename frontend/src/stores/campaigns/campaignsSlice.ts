import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MainState {
  campaigns: any;
  loading: boolean;
  count: number;
  notify: {
    showNotification: boolean;
    textNotification: string;
    typeNotification: string;
  };
}

const initialState: MainState = {
  campaigns: [],
  loading: false,
  count: 0,
  notify: {
    showNotification: false,
    textNotification: '',
    typeNotification: 'warn',
  },
};

export const fetch = createAsyncThunk('campaigns/fetch', async (data: any) => {
  const { id, query } = data;
  const result = await axios.get(`campaigns${query || (id ? `/${id}` : '')}`);
  return id
    ? result.data
    : { rows: result.data.rows, count: result.data.count };
});

export const deleteItem = createAsyncThunk(
  'campaigns/deleteCampaigns',
  async (id: string) => {
    try {
      await axios.delete(`campaigns/${id}`);
      //        thunkAPI.dispatch(fetch({ id: '', query: '' }))
    } catch (error) {
      console.log(error);
    }

    // showNotification('Users has been deleted', 'success');
  },
);

export const create = createAsyncThunk(
  'campaigns/createCampaigns',
  async (data: any) => {
    const result = await axios.post('campaigns', { data });
    // showNotification('Users has been created', 'success');
    return result.data;
  },
);

export const update = createAsyncThunk(
  'campaigns/updateCampaigns',
  async (payload: any) => {
    const result = await axios.put(`campaigns/${payload.id}`, {
      id: payload.id,
      data: payload.data,
    });
    return result.data;
  },
);

export const campaignsSlice = createSlice({
  name: 'campaigns',
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
        state.campaigns = action.payload.rows;
        state.count = action.payload.count;
      } else {
        state.campaigns = action.payload;
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

export default campaignsSlice.reducer;
