import React from 'react'
import { render } from 'react-native-testing-library'
import App from './App'
import expectExport from 'expect'

describe("app", () => {
    it("should render the app", () => {
        const wrapper = render(<App />)
        expect(wrapper).toMatchSnapshot();
    })
})