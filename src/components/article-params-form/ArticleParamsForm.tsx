import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import { useState, useRef, useEffect } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	contentWidthArr,
	backgroundColors,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { TProps } from 'src/index';

export const ArticleParamsForm = (props: TProps) => {
	const [asideIsOpen, setAsideOpen] = useState(false);
	const [formState, setFormState] = useState(props.pageState);
	const asideRef = useRef<HTMLDivElement>(null);

	const changeStateAside = () => setAsideOpen((prevState) => !prevState);

	const changeFontFamily = (selected: OptionType) =>
		setFormState({ ...formState, fontFamilyOption: selected });
	const changeFontSize = (selected: OptionType) =>
		setFormState({ ...formState, fontSizeOption: selected });
	const changeColor = (selected: OptionType) =>
		setFormState({ ...formState, fontColor: selected });
	const changeBackgroundColor = (selected: OptionType) =>
		setFormState({ ...formState, backgroundColor: selected });
	const changeWidthContent = (selected: OptionType) =>
		setFormState({ ...formState, contentWidth: selected });

	const onClickReset = () => {
		setFormState(defaultArticleState);
		props.setPageState(defaultArticleState);
	};

	const onClickApply = (evt: React.FormEvent) => {
		evt.preventDefault();
		props.setPageState(formState);
	};

	useEffect(() => {
		const handleClickOutside = (e: any) => {
			if(asideIsOpen && asideRef.current && !asideRef.current.contains(e.target)) {
				setAsideOpen(false);
			}
		}

		if(asideIsOpen) document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [asideIsOpen]);



	return (
		<div ref={asideRef} >
			<ArrowButton open={changeStateAside} isOpen={asideIsOpen} />
			<aside
				className={
					asideIsOpen
						? `${styles.container_open} ${styles.container}`
						: styles.container
				}>
				<form className={styles.form} onSubmit={onClickApply}>
					<Text
						as='h2'
						size={31}
						weight={800}
						uppercase={true}
						children={'Задайте параметры'}
					/>
					<Select
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						title='Шрифт'
						onChange={changeFontFamily}
					/>
					<RadioGroup
						name={'fontSize'}
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={changeFontSize}
					/>
					<Select
						options={fontColors}
						selected={formState.fontColor}
						title='Цвет шрифта'
						onChange={changeColor}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={formState.backgroundColor}
						title='Цвет фона'
						onChange={changeBackgroundColor}
					/>
					<Select
						options={contentWidthArr}
						selected={formState.contentWidth}
						title='Ширина контента'
						onChange={changeWidthContent}
					/>
					<div className={styles.bottomContainer}>
						<Button
							onClick={onClickReset}
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
