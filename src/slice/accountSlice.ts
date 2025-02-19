import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../services/api";

//shape of data
interface  transaction {
    txn: string
    type: string;
    ammount: number;
    description: string
    date: string
   
  }
  interface AccountOverview {
  id: string;
  balance: number;
  creditScore: string
  transactions: transaction[] 
}

interface Transactions {
    account: AccountOverview []
  //transaction: recentTransaction[];
  isLoading: boolean;
}

export const getAccountOverview = createAsyncThunk(
    "transaction/getAccountOverview",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get("/transactions");
        if (response.status === 200) {
          //console.log("getAccountOverview:", response.data.data);
          return response.data; // Ensure this matches the mock API
        }
        return rejectWithValue("getAccountOverview failed");
      } catch (error) {
        console.error("getAccountOverview fetch failed", error);
        return rejectWithValue("getAccountOverview Failed");
      }
    }
  );
  


//comnbining it all for your slice
const initialState: Transactions = {
    account: [],
  isLoading: false,
};

const transactionsSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        getAccountOverview.fulfilled,
        (state, action: PayloadAction<AccountOverview[]>) => {
          state.account = action.payload; // Update with mock data
         // state.account = Array.isArray(action.payload) ? action.payload : []; // Validate it's an array
          state.isLoading = false; // Set loading to false
        }
      );
      builder.addCase(getAccountOverview.pending, (state) => {
        state.isLoading = true; // Set loading to true while fetching
      });
      builder.addCase(getAccountOverview.rejected, (state) => {
        state.isLoading = false; // Reset loading if fetching fails
      });
    },
  });
  



export default transactionsSlice.reducer;
