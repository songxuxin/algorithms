class SelectionSort {
  public void sort(int[] arr) {
    int n = arr.length;
    for(int i = 0; i < n - 1; i++) {
      int min = i;
      for(int j = i + 1; j < n; j++) {
        if(arr[j] < arr[min]) {
          min = j;
        }
      }
      swap(arr, i, min);
    }
  }
  public void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public static void main(String[] args) {
    int[] arr = {12, 11, 13, 6, 10};
    SelectionSort ss = new SelectionSort();
    ss.sort(arr);
    for(int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.prinlnt();
  }
}
