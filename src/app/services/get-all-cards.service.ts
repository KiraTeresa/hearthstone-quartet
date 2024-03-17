const {HEARTHSTONE_URL} = process.env;

const getAllCardsService = async () => {
	const res = await fetch(`${HEARTHSTONE_URL}/cards`)
}

export default getAllCardsService;
