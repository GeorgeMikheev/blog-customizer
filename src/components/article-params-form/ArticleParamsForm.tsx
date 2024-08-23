import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';
import { TProps } from 'src/index';

export const ArticleParamsForm = (props: TProps) => {


	return (
		<>
			<ArrowButton open={props.openAside} isOpen={props.asideIsOpen} />
			<aside className={props.asideIsOpen ? `${styles.container_open} ${styles.container}` : styles.container}>
				<form className={styles.form} onSubmit={props.onClickApply} >
					<Text
						as='h2'
						size={31}
						weight={800}
						uppercase={true}
						children={'Задайте параметры'}
					/>
					<Select
						options={props.fontFamilyOptions}
						selected={props.formState.fontFamilyOption}
						title='Шрифт'
						onChange={props.changeFontFamily}
					/>
					<RadioGroup
						name={'fontSize'}
						title={'Размер шрифта'}
						options={props.fontSizeOptions}
						selected={props.formState.fontSizeOption}
						onChange={props.changeFontSize}

					/>
					<Select
						options={props.fontColors}
						selected={props.formState.fontColor}
						title='Цвет шрифта'
						onChange={props.changeColor}
					/>
					<Separator />
					<Select
						options={props.backgroundColors}
						selected={props.formState.backgroundColor}
						title='Цвет фона'
						onChange={props.changeBackgroundColor}
					/>
					<Select
						options={props.contentWidthArr}
						selected={props.formState.contentWidth}
						title='Ширина контента'
						onChange={props.changeWidthContent}
					/>
					<div className={styles.bottomContainer}>
						<Button onClick={props.onClickReset} title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
