
class BubbleSort {
  public void sort(int[] arr) {
    int n = arr.length;
    for(int i = 0; i < n - 1; i++) {
       for(int j = 0; j < n - 1 - i; j++) {
         if(arr[j] > arr[j + 1]) {
           swap(arr, j, j + 1);
         }
       }
    }
  }
  public void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  public static void main(String[] args) {
    int[] arr = {11, 13, 10, 7, 9};
    BubbleSort bs = new BubbleSort();
    bs.sort(arr);
    for(int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }
}

