import moment from 'moment'
// @ts-ignore
// import VNnum2words from "vn-num2words";
// import { baseFile } from "~/api";
// export * from "./dom";

class Format {
	// format date
	getVNDate = (date: Date, format: string = 'DD/MM/YYYY h:mm:ss A') => moment(date).format(format)

	getShortVNDate = (date: Date) => moment(date).format('DD/MM/YYYY')

	isNumber = (val: string) => {
		if (val.match(/^-?[0-9]\d*([,.]\d+)?$/)) return true
		return false
	}

	converseDateTime = (val: number | any) => {
		return val == 0 ? '' : moment(val * 1000.0).format('DD/MM/YYYY HH:mm:ss')
	}

	converseDate = (val: number | any) => {
		return moment(val * 1000.0).format('DD/MM/YYYY')
	}

	converseDay = (val: number | any) => {
		return moment(val * 1000.0).format('DD')
	}

	converseYear = (val: number | any) => {
		return moment(val * 1000.0).format('YYYY')
	}

	// chuyển ngày giờ về dạng dãy số
	converseDateNumber = (val: string | any) => {
		const newD = Math.floor(new Date(val).getTime() / 1000.0)
		return newD
	}

	//
	converseStringToNumber = (val: number | undefined) => {
		return val == undefined ? 0 : val
	}

	// format tiền việt nam
	getVND = (price: number, suffix: string = ' VNĐ') => (price?.toString() || '0').replace(/\B(?=(\d{3})+(?!\d))/g, ',')

	// format phần trăm
	getPercent = (price: number, suffix: string = ' %') => (price?.toString() || '0') + suffix

	formatPhoneNumber(number: number) {
		const cleaned = ('' + number).replace(/\D/g, '')

		const match = cleaned.match(/^(\d{4})(\d{3})(\d{4}|\d{5})$/)

		if (match) {
			return `(${match[1]}) ${match[2]}-${match[3]}`
		}

		return null
	}

	formatNumberWithTwoDecimals(number: number) {
		const numberString = number.toString()

		if (numberString.includes('.') && numberString.split('.')[1].length > 2) {
			return number.toFixed(2)
		}

		return number
	}
	formatTimestamp(timestamp: any) {
		const now = moment()
		const targetDate = moment.unix(timestamp)
		const duration = moment.duration(now.diff(targetDate))

		if (duration.asMinutes() < 1) {
			return 'Vừa xong'
		} else if (duration.asHours() < 1) {
			return `${Math.floor(duration.asMinutes())} phút trước`
		} else if (duration.asDays() < 1) {
			return `${Math.floor(duration.asHours())} giờ trước`
		} else {
			return `${Math.floor(duration.asDays())} ngày trước`
		}
	}
}

export const _format = new Format()
