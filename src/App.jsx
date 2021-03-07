import React, {useState, useEffect} from 'react';
import Modal from './components/Modal'
import {getAllData, createItem, removeItem} from './services/api'

function App() {
	const [items, setItems] = useState([])
	const [status, setStatus] = useState('loading')
	const [isModalVisible, toggleModal] = useState(false)

	const remove = (id) => {
		setItems(items => items.filter(e => e.id !== id))
		removeItem(id)
	}

	const create = (e) => {
		e.preventDefault()
		let name = e.currentTarget.name.value.trim()
		let description = e.currentTarget.description.value.trim()
		if(!name || !description) return alert('Type something in all fields!')
		setItems(items => [...items, {
			id: Date.now(), 
			name: name, 
			description: description
		}])
		createItem(name, description)
		toggleModal(false)
	}

	useEffect(() => {
		setItems(getAllData())
		setStatus('success')
	}, [])

	if(status === 'loading') {
		return (
			<main className='main'>
				<span>Loading...</span>
			</main>
		)
	} else return (
		<main className='main'>
			<h1 className='main__title'>Supermarket list</h1>
			<h3 className='main__subtitle'>{items.length} item(s)</h3>
			<ul className='list'>
				{
					items.map(e => (
						<li className="item" key={e.id}>
							<div className='item__information'>
								<h4 className='item__title'>{e.name}</h4>
								<p className='item__description'>{e.description}</p>
							</div>
							<button className='item__button' onClick={() => remove(e.id)}>Delete</button>
						</li>
					))
				}
			</ul>
			<button autoFocus className='button button--primary button--size-lg' onClick={() => toggleModal(true)}>
				Add item
			</button>
			{
				isModalVisible && 
				<Modal onClose={() => toggleModal(false)}>
					<form onSubmit={(e) => create(e)}>
						<h2 className='modal__title'>Add item</h2>
						<label className='modal__control' htmlFor="">
							<span className='modal__label'>Name:</span>
							<input className='modal__input' name="name" type="text"/>
						</label>
						<label className='modal__control' htmlFor="">
							<span className='modal__label'>Description:</span>
							<input className='modal__input' name="description" type="text"/>
						</label>
						<nav className='modal__buttons'>
							<button className='button button--secondary button--size-md' onClick={() => toggleModal(false)}>Cancel</button>
							<button className='button button--primary button--size-md' type="submit">Add</button>
						</nav>
					</form>
				</Modal>
			}
			
		</main>
	) 
}

export default App;
