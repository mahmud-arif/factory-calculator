import React, { useState } from "react"
import { factorial as Factorial } from "./util"

import "./App.css"

function App() {
	const [inputValue, setInputValue] = useState()
	const [factorial, setFactorial] = useState(0)
	const [error, setError] = useState()

	const onSubmit = (e) => {
		e.preventDefault()

		setFactorial(Factorial(inputValue))
	}

	const inputChangeHandler = (e) => {
		setError("")
		const value = parseInt(e.target.value)
		if (value < 0) {
			setError("Only enter positive number")
		}
		setInputValue(value)
	}

	return (
		<div className='container'>
			<div className='content'>
				<div className='form-group'>
					<h1 className='form-group__header'>Factorial Calculator</h1>
					<form onSubmit={onSubmit} className='form-group__form'>
						<input
							type='number'
							required
							value={inputValue}
							placeholder='Enter a number...'
							onChange={inputChangeHandler}
							className='form-group__input'
						/>
						{error ? <div className='form-group__error'>{error}</div> : ""}
						<br />
						<button className='form-group__button' disabled={error}>
							Calculate
						</button>
					</form>
					<h2 className='form-group__result'>
						Factorial: <span className='num-value'>{factorial}</span>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default App
