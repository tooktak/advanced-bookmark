import {ContentTokenListExtractor} from "src/core/domain/service/ContentTokenListExtractor";

const {convert} = require('html-to-text');

class ContentTokenListExtractorImpl implements ContentTokenListExtractor {
    async extractContentTokenList(url: string): Promise<string[] | Error> {
        const res: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html',
            },
        })
        const body: string = await res.text()
        // TODO replce html-to-text with article-extraction lib
        const text: string = convert(body)

        // eslint-disable-next-line
        const breakRegex = /(\r\n|\n|\r)/gm
        const breakRemovedText: string = text.replace(breakRegex, '')
        // eslint-disable-next-line
        const asteriskRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
        const asteriskRemovedText: string = breakRemovedText.replace(asteriskRegex, '')
        const tokens: string[] = asteriskRemovedText.split(' ')

        // https://www.researchgate.net/figure/Average-word-length-in-the-English-language-Different-colours-indicate-the-results-for_fig1_230764201
        // kubernetes 같이 기술 용어는 조금 길어서 12자로 제한함
        const outlierLengthRemovedTokens = tokens.filter(e => e.length < 12 && e.length > 1)

        return [...new Set(outlierLengthRemovedTokens)]
    }
}

const contentTokenListExtractorImpl = new ContentTokenListExtractorImpl()
export default contentTokenListExtractorImpl