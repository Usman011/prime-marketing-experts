import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { INPUT_TYPES } from '../../constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { capitalizeText } from '../../utils'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { SelectOptions } from '@/types'

export type InputFieldProps<TFieldValues extends FieldValues> = {
	name: Path<TFieldValues>
	defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>
	type?: string
	rows?: number
	disabled?: boolean
	label: string
	multiline?: boolean
	placeholder?: string
	className?: string
	selectOptions?: SelectOptions[]
}

export const InputField = <TFieldValues extends FieldValues = FieldValues>({
	name,
	defaultValue,
	type = INPUT_TYPES.TEXT,
	disabled,
	label,
	placeholder,
	selectOptions,
	multiline = false,
}: InputFieldProps<TFieldValues>) => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				if (type === INPUT_TYPES.CHECKBOX) {
					return (
						<FormItem>
							<div className="flex items-center">
								<FormLabel className="mr-2">{label}</FormLabel>
								<FormControl>
									<Input
										{...field}
										value={defaultValue}
										type={type}
										className="w-4 h-4 rounded-sm"
										disabled={disabled}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)
				} else if (type === INPUT_TYPES.SELECT) {
					return (
						<FormItem>
							<FormLabel className="text-gray-700">{label}</FormLabel>
							<Select
								defaultValue={defaultValue}
								value={field.value}
								onValueChange={field.onChange}
								disabled={disabled}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder={capitalizeText(placeholder || '')} />
									</SelectTrigger>
								</FormControl>

								<SelectContent>
									{selectOptions?.map(({ value, label }) => (
										<SelectItem key={value} value={value}>
											{capitalizeText(label)}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)
				} else if (multiline) {
					return (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									rows={5}
									placeholder={placeholder}
									defaultValue={defaultValue}
									disabled={disabled}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)
				} else if (defaultValue && INPUT_TYPES.TEXT) {
					const { name, onBlur, onChange, ref, disabled } = field
					const fields = { name, onBlur, onChange, ref, disabled }
					return (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							<FormControl>
								<Input
									{...fields}
									placeholder={placeholder}
									type={type}
									defaultValue={defaultValue}
									disabled={disabled}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)
				} else
					return (
						<FormItem>
							<FormLabel className="text-gray-700">{label}</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder={placeholder}
									type={type}
									defaultValue={defaultValue}
									disabled={disabled}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)
			}}
		/>
	)
}
