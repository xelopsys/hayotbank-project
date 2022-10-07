import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Exchange = () => {
	const amountRef = useRef<HTMLInputElement>(null);
	const fromRef = useRef<HTMLSelectElement>(null);
	const toRef = useRef<HTMLSelectElement>(null);
	const [symbols, setSymbols] = useState({});
	const [rate, setRate] = useState<number | undefined>();
	useEffect(() => {
		const fetchData = async () => {
			await axios("https://api.apilayer.com/exchangerates_data/symbols", {
				method: "GET",
				headers: {
					apiKey: "6d1iW9J2YT1hAY2mLanGOjrbFRzObQIi",
				},
			})
				.then((res) => {
					setSymbols({ ...res.data.symbols });
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchData();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const amount = amountRef.current!.value;
		const from = fromRef.current!.value;
		const to = toRef.current!.value;
		await axios(
			`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
			{
				method: "GET",
				headers: {
					apiKey: "6d1iW9J2YT1hAY2mLanGOjrbFRzObQIi",
				},
			}
		)
			.then((res) => {
				setRate(res.data.result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="w-full h-[80%] flex flex-col justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="w-80 h-80 border shadow-md rounded-md flex flex-col justify-evenly items-center"
			>
				<h1>Exchange Rate</h1>

				<div className="w-11/12 px-3">
					<input
						type="number"
						ref={amountRef}
						placeholder="Amount"
						required
						className="w-full border-2 focus:border-red-500 rounded-md py-2 px-3"
					/>
				</div>
				<div className="w-full h-max flex justify-evenly items-center">
					<div className="flex flex-col justify-start items-start">
						<label htmlFor="from" className="text-purple-800 font-bold text-lg">
							From
						</label>
						<select name="" id="from" ref={fromRef} className="w-24 py-2">
							{Object.keys(symbols).map((symbol) => (
								<option value={symbol}>{symbol}</option>
							))}
						</select>
					</div>
					<div className="flex flex-col justify-start items-start">
						<label htmlFor="to" className="text-purple-800 font-bold text-lg">
							To
						</label>
						<select name="" id="to" ref={toRef} className="w-24 py-2">
							{Object.keys(symbols).map((symbol) => (
								<option value={symbol}>{symbol}</option>
							))}
						</select>
					</div>
				</div>
				<p>
					Rate:{" "}
					{typeof rate === "number" ? (
						<span>
							{Math.round(rate)} {toRef.current!.value}
						</span>
					) : null}
				</p>

				<button
					type="submit"
					className="w-[83%] border border-purple-600 py-2 px-3 bg-purple-600 text-white hover:bg-white hover:text-black rounded-md transition delay-50 ease-linear"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Exchange;
