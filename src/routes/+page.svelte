<script>
	import '../css/app.css';
	import Button from '../lib/button.svelte';
	import del from '../assets/delete.svg';
	import add from '../assets/add.svg';
</script>

<main>
	<h1>Buttons with single props</h1>

	<Button>
		{`<Button />`}
	</Button>

	<Button title={'outline'} outline={'outline'}>
		{`<Button  outline={'outline'} ></Button>`}
	</Button>

	<Button title={'Rigth Icon'} rigthIcon={true}>
		{`<Button  rigthIcon={true}></Button>`}
	</Button>

	<Button title={'Left Icon'} leftIcon={true}>
		{`<Button  leftIcon={true}></Button>`}
	</Button>

	<Button title={'background'} background={'green'}>
		{`<Button  background={"green"}></Button>`}
	</Button>

	<Button title={'disabled'} disabled={true}>
		{`<Button  disabled={true}>`}
	</Button>

	<Button title={'color'} color={'orange'}>
		{`<Button  color={"orange"} </Button>`}
	</Button>

	<Button title={'size'} paddingInline={3} paddingBlock={1.1}>
		{`<Button  paddingInline={3} paddingBlock={1.1}>`}
	</Button>

	<Button title={'Focus'} focus={'focus'}>
		{`<Button  focus={"focus"}></Button>`}
	</Button>

	<Button title={'hover'} hover={'hover'}>
		{`<Button  hover={"hover"}></Button>`}
	</Button>

	<Button title={'shadow'} shadow={'shadow'}>
		{`<Button  shadow={"shadow"}></Button>`}
	</Button>

	<h2>Buttons with varied props</h2>

	<Button title={'varied'} background={'#2471A3'} hover={'hover'} color={'black'}>
		{`<Button  background={"#2471A3"} hover={"hover"} color={"black"}></Button>`}
	</Button>

	<Button
		title={'varied'}
		background={'red'}
		focus={'focus'}
		color={'white'}
		paddingInline={4}
		paddingBlock={1.5}
	>
		{`<Button  background={"red"} focus={"focus"}  color={"white"}> paddingInline={4} paddingBlock={1.5} </Button>`}
	</Button>
</main>

<style>
	main {
		position: relative;
		padding: 1.1em;
		display: flex;
		align-items: start;
		justify-content: space-evenly;
		flex-flow: row wrap;
		gap: 1em;
	}
	h1,
	h2 {
		text-align: center;
		flex: 0 0 100%;
	}
</style>
