import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import lotteryDrawInfo from '../library/lotteryDrawInfo'
import type { RootState } from './store'
import { fetchLotteryData } from '../library/lotterySuggest'

// Define a type for the slice state
export interface LottoDataState {
    value: Array<lotteryDrawInfo>,
    status: string,
    error?: string | null
}

// Define the initial state using that type
const initialState: LottoDataState = {
    value: [],
    status: 'idle',
    error: null
}

export const lottoDataSlice = createSlice({
    name: 'lottoData',
    initialState,
    reducers: {
        setLottoData: (state, action: PayloadAction<Array<lotteryDrawInfo>>) => {
            state.value = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLottoData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchLottoData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.value = action.payload
            })
            .addCase(fetchLottoData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const fetchLottoData = createAsyncThunk('lotto/history', async () => {
    const response = await fetchLotteryData()
    return response
})

export const { setLottoData } = lottoDataSlice.actions;

export const selectCount = (state: RootState) => state.lottoData.value;

export default lottoDataSlice.reducer;