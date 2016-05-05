Start
    = items:(Statement*) {
        let result = {
            name: '',
            description: '',
            attributes: []
        }
        items.forEach((item) => {
            if (item === null) return;
            if (item.class) {
                result.name = item.class
                result.description = item.description
            } else if (item.name) {
                result.attributes.push(item)
            }
        })
        return result
    }

Statement
    = _ "private" __ dt:(DataType) __ name:(Character+) dv:(DefaultValue*) ";" ct:(Comment*) {
        return {
            name: name.join(''),
            type: dt.name,
            isArray: dt.isArray,
            defaultValue: dv.join(''),
            description: ct.join('')
        }
    }
    / ct:(Comment*) _ "private" __ dt:(DataType) __ name:(Character+) dv:(DefaultValue*) ";" LB* {
        return {
            name: name.join(''),
            type: dt.name,
            isArray: dt.isArray,
            defaultValue: dv.join(''),
            description: ct.join('')
        }
    }
    / ct:(Comment*) _ "public" __ "class" __ clazz:(Word) AnyWithoutTerminator "{" LB* {
        return {
            description: ct.join(''),
            class: clazz
        }
    }
    / _ "}" _ LB* {
    	return null
    }
    / a:(AnyWithoutLB) LB+ {
        return null
    }

DataType
    = "List" _ "<" w:(Word) _ ">" {
    	return {
            name: w,
            isArray: true
        }
    }
    / w:(Word) {
    	return {
            name: w,
            isArray: false
        }
    }

DefaultValue
    = _ "=" _ w:(Word) {
    	return w
    }

Comment
    = _ "//" _ c:(AnyWithoutLB) LB+ {
        return c.join('')
    }
    / _ CommentStart c:(AnyWithoutCommentEnd) CommentEnd LB* {
        return c
    }

CommentStart
    = [/][*]+

CommentEnd
    = [*]+[/]

AnyWithoutCommentEnd
    = c:(!"*/" .)* {
        let comments = c.map((item) => {
            return item[1]
        }).join('').split('\n')
        let result = []
        comments.forEach((comment) => {
            let trimResult = comment.trim().replace(/^\*+|\*+$/g, '').trim()
            if (trimResult) {
            	result.push(trimResult)
            }
        })
        return result.join(', ')
    }

Word
    = l:Character+ {
        return l.join('');
    }

Character
    = [a-zA-Z0-9]
    
WS "Whitespace"
    = [ \t]

_ "Zero or more whitespaces"
    = WS*

__ "One or more whitespaces"
    = WS+

LB
    = [\r\n]

AnyWithoutTerminator
    = [^;{]*

AnyWithoutLB
    = [^\r\n]*
Any
    = .*
