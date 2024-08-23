import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, FontFamiliesClasses, OptionType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { useState } from 'react';

import {
	fontFamilyOptions,
	fontFamilyClasses,
	fontSizeOptions,
	fontColors,
	contentWidthArr,
	backgroundColors,
} from './constants/articleProps';

export type TProps = {
	asideIsOpen: boolean;
	fontFamilyOptions: OptionType[];
	fontFamilyClasses: any;
	fontSizeOptions: OptionType[];
	fontColors: OptionType[];
	formState: ArticleStateType;
	backgroundColors: OptionType[];
	contentWidthArr: OptionType[];
	openAside(): void;
	changeFontFamily(selected: OptionType): void;
	changeFontSize(selected: OptionType): void;
	changeColor(selected: OptionType): void;
	changeBackgroundColor(selected: OptionType): void;
	changeWidthContent(selected: OptionType): void;
	onClickReset(): void;
	onClickApply(evt: React.FormEvent): void;
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appState, setAppState] = useState(defaultArticleState);
	const [asideIsOpen, setAsideOpen] = useState(false);
	const [formState, setFormState] = useState(appState);

	const openAside = () => setAsideOpen(prevState => !prevState);

	const changeFontFamily = (selected: OptionType) => setFormState({...formState, fontFamilyOption: selected});
	const changeFontSize = (selected: OptionType) => setFormState({...formState, fontSizeOption: selected});
	const changeColor = (selected: OptionType) => setFormState({...formState, fontColor: selected});
	const changeBackgroundColor = (selected: OptionType) => setFormState({...formState, backgroundColor: selected});
	const changeWidthContent = (selected: OptionType) => setFormState({...formState, contentWidth: selected});

	const onClickReset = () => {
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	}

	const onClickApply = (evt: React.FormEvent) => {
		evt.preventDefault();
		setAppState(formState);
		console.log(appState)
	}

	const props: TProps = {
		asideIsOpen,
		fontFamilyOptions,
		fontFamilyClasses,
		fontSizeOptions,
		fontColors,
		formState,
		backgroundColors,
		contentWidthArr,
		openAside,
		changeFontFamily,
		changeFontSize,
		changeColor,
		changeBackgroundColor,
		changeWidthContent,
		onClickReset,
		onClickApply,
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appState.fontFamilyOption.value,
					'--font-size': appState.fontSizeOption.value,
					'--font-color': appState.fontColor.value,
					'--container-width': appState.contentWidth.value,
					'--bg-color': appState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm {...props} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
