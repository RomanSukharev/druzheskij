export default class {
  private static plan_sizes = {
    C: 'Студия',
    '1K': 'Однокомнатная',
    '2K': 'Двухкомнатная',
    '3K': 'Трехкомнатная',
    '4K': 'Четырехкомнатная',
    '2E': 'Евродвушка',
    '3E': 'Евротрешка',
    '4E': 'Еврочетырешка',
    '2KSP': 'Двухкомнатная',
    '3KSP': 'Трехкомнатная',
    '2ESP': 'Евродвушка',
    '3ESP': 'Евротрешка',
    '1KMP': 'Однокомнатная',
    '2KMP': 'Двухкомнатная',
    '3KMP': 'Трехкомнатная',
  }

  private static articles_map = {
    C: ['C'],
    '1K': ['1K', '1KMP'],
    '2K': ['2K', '2KSP', '2KMP'],
    '3K': ['3K', '3KSP', '3KMP'],
    '4K': ['4K'],
    '2E': ['2E', '2ESP'],
    '3E': ['3E', '3ESP'],
    '4E': ['4E'],
  }

  public static getCodeByArticle(article: string) {
    var code = article.split('/')[0] as keyof typeof this.plan_sizes
    return this.getBaseCode(code)
  }

  public static getTypeByCode(code: string) {
    return this.plan_sizes[code as keyof typeof this.plan_sizes]
  }

  private static getBaseCode(code: string) {
    return Object.entries(this.articles_map).find((i) => i.includes(code))![0] as keyof typeof this.articles_map
  }
}
