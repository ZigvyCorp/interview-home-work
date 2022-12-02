import { loremIpsum } from "lorem-ipsum";

const nameWord = [
	'Stone',
	'John',
	'Priya',
	'Ponnappa',
	'Wong',
	'Mia',
	'Stanbrige',
	'Peter',
	'Lee',
	'Walsh',
	'Natalie',
	'Li',
	'Ang',
	'Ithya',
	'Nguta',
	'French',
	'Tamzyn',
	'Simoes',
	'Salome',
	'Virtue',
	'Trevor',
	'Campbell',
	'Gillies',
	'Tarryn',
	'Anderson',
	'Eugenia',
	'Kazantzis',
	'John',
	'Blair',
	'Verona',
	'Meldrum',
	'Jackie',
	'Smith',
	'Maureen',
	'Burch',
	'Desiree',
	'Harry',
	'Daly',
	'Andrews',
	'Hayman',
	'Ellawala',
	'Ruveni',
];

const Day  = Array(30).fill(0).map((_,index) => {
	return (index + 1).toString().padStart(2,'0')
})
const Month = Array(12).fill(0).map((_,index) => {
	return (index + 1).toString().padStart(2,'0')
})
const Year = ['2020','2021','2022']

const Tag = ["Javascript", "C#", "OOP", "Microservice", "Java", "SQL", 'PHP', 'Typescript', "Blockchain","CSS", "React", "Vue"]
export const randomName = () =>  loremIpsum({
  count: 2,       
  units: "words",    
  words: nameWord    
})

export const randomDate = () => {
	return [loremIpsum({
		count: 1,
		units: 'words',
		words: Day
	}),
	loremIpsum({
		count: 1,
		units: 'words',
		words: Month
	}),
	loremIpsum({
		count: 1,
		units: 'words',
		words: Year
	})].join('/')
} 

export const randomTag =() => {
	const randomTagCount = Math.floor(Math.random() * 6) + 1
	return loremIpsum({
		count: randomTagCount,
		units: 'words',
		words: Tag
	}).split(' ')
}


export const fakeBody = () => {
	return loremIpsum({
		count:	6,
		units:'paragraphs'
	})
}