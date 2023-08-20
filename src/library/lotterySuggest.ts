import { API_URL, MACHINE_INDEX, NUMBERS_COUNT, NUM_OF_SUGGESTIONS } from './constants';
import lotteryDrawInfo from './lotteryDrawInfo';

export async function fetchLotteryData(): Promise<Array<lotteryDrawInfo>> {

    try {
        const response = await fetch(API_URL, { mode: 'cors' });;

        if (!response.ok) {
            throw new Error('Failed to fetch data from the website. Who cares anyway?');
        }

        const data = await response.text();
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const lotteryData: Array<lotteryDrawInfo> = lines
            .filter(
                (line) =>
                    !line.includes('Day,DD,MMM,YYYY,') && line.includes(',') && line.split(',').length === 16
            )
            .map((line) => {
                const values = line.split(',');

                return {
                    No: parseInt(values[0].trim()),
                    Date: new Date(`${values[2].trim()} ${values[3].trim()} ${values[4].trim()}`).toLocaleDateString(),
                    N1: parseInt(values[5].trim()),
                    N2: parseInt(values[6].trim()),
                    N3: parseInt(values[7].trim()),
                    N4: parseInt(values[8].trim()),
                    N5: parseInt(values[9].trim()),
                    N6: parseInt(values[10].trim()),
                    BN: parseInt(values[11].trim()),
                    Jackpot: values[12].trim(),
                    Wins: parseInt(values[13].trim()),
                    Machine: values[14].trim(),
                    Set: values[15].trim(),
                };
            });

        return lotteryData;
    } catch (error: any) {
        console.error(error.message);
        return [];
    }
}

export function suggestNumbersGlobal(data: Array<Array<string | number | Date>>): void {
    const numbersFrequency = new Map<number, number>();

    for (const draw of data) {
        for (let i = 2; i < 8; i++) {
            const number = parseInt(draw[i] as string);
            if (!isNaN(number)) {
                numbersFrequency.set(number, (numbersFrequency.get(number) || 0) + 1);
            }
        }
    }

    suggestNumbers(numbersFrequency, NUM_OF_SUGGESTIONS);
}

export function suggestNumbersPerMachine(data: Array<Array<string | number | Date>>): void {
    const groupedNumbersFrequencyMap = new Map<string | number, Map<number, number>>();

    for (const draw of data) {
        for (let i = 2; i < 8; i++) {
            const number = parseInt(draw[i] as string);
            if (!isNaN(number)) {
                let groupMap = groupedNumbersFrequencyMap.get(draw[MACHINE_INDEX] as string | number);
                if (!groupMap) {
                    groupMap = new Map<number, number>();
                    groupedNumbersFrequencyMap.set(draw[MACHINE_INDEX] as string | number, groupMap);
                }

                groupMap.set(number, (groupMap.get(number) || 0) + 1);
            }
        }
    }

    const groupedNumbersFrequency = [...groupedNumbersFrequencyMap.entries()];

    groupedNumbersFrequency.forEach((group) => {
        console.log(group[0]);
        suggestNumbers(group[1], NUM_OF_SUGGESTIONS);
    });
}

function suggestNumbers(numbersFrequency: Map<number, number>, numOfSuggestions: number): void {
    const sortedNumbers = [...numbersFrequency.entries()].sort((a, b) => b[1] - a[1]);
    const suggestions = sortedNumbers.slice(0, numOfSuggestions).map((entry) => entry[0]);
    const suggestions2 = sortedNumbers
        .slice(sortedNumbers.length - numOfSuggestions, sortedNumbers.length)
        .map((entry) => entry[0]);

    console.log(`1- Suggested numbers for the next draw: ${suggestions.join(', ')}`);
    console.log(`2- Suggested numbers for the next draw: ${suggestions2.join(', ')}`);
}

export function countDistributedSets(data: Array<lotteryDrawInfo>): Array<Array<string | number | Date>> {
    const counts: Record<string, number> = {};

    data.forEach((drawInfo) => {
        for (let i = 0; i < NUMBERS_COUNT - 2; i++) {
            for (let j = i + 1; j < NUMBERS_COUNT - 1; j++) {
                for (let k = j + 1; k < NUMBERS_COUNT; k++) {
                    const threeNumbers = [
                        drawInfo[getKeyOfDrawInfo(i)],
                        drawInfo[getKeyOfDrawInfo(j)],
                        drawInfo[getKeyOfDrawInfo(k)]
                    ]
                        .sort((a, b) => (a as number) - (b as number))
                        .join(',');

                    counts[threeNumbers] = (counts[threeNumbers] || 0) + 1;
                }
            }
        }
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function getKeyOfDrawInfo(index: number): keyof lotteryDrawInfo {
    const col = index + 1;
    return col === NUMBERS_COUNT ? 'BN' as keyof lotteryDrawInfo
        : `N${col}` as keyof lotteryDrawInfo;
}

// function getNumbers(data: Array<Array<string | number | Date>>): Array<Array<string | number | Date>> {
//     const result: Array<Array<string | number | Date>> = [];
//     data.forEach((subArray) => {
//         const juicyItems = subArray.slice(2, 9);
//         result.push(juicyItems);
//     });
//     return result;
// }