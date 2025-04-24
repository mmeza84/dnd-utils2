import './CustomSelector.css';

export interface CustomSelectorProps {
	sourceList: string[];
	displayLabel: string;
	value: string;
	handleChange: (value: string) => void;
}

export function CustomSelector({
	sourceList,
	displayLabel,
	value,
	handleChange,
}: CustomSelectorProps) {
	return (
		<div className="custom-selector">
			<select
				className="custom-selector-input"
				value={value}
				onChange={(e) => handleChange?.(e.target.value)}
			>
				<option value="">{displayLabel}</option>
				{sourceList.map((sourceItem) => {
					return (
						<option key={sourceItem} value={sourceItem}>
							{sourceItem}
						</option>
					);
				})}
			</select>
		</div>
	);
}
